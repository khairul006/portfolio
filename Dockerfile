# 1. build the React client into the API's wwwroot
FROM node:24-alpine AS client
WORKDIR /src/client
COPY client/package.json client/package-lock.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# 2. test and publish the .NET API with the built site inside
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS server
WORKDIR /src/server
COPY server/ ./
COPY --from=client /src/server/Portfolio.Api/wwwroot ./Portfolio.Api/wwwroot
RUN dotnet test Portfolio.Tests && dotnet publish Portfolio.Api -c Release -o /app

# 3. run
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=server /app ./
ENV ASPNETCORE_URLS=http://+:8080 \
    Contact__InboxPath=/data/messages.jsonl
VOLUME /data
EXPOSE 8080
ENTRYPOINT ["dotnet", "Portfolio.Api.dll"]
