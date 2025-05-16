@echo off
title OffGrid Private AI Installer
echo ======================================
echo     OffGrid Private AI Installer
echo ======================================

:: Check if Docker is installed
where docker >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Docker is not installed or not in the system PATH.
    echo Please install Docker Desktop: https://www.docker.com/products/docker-desktop
    echo.
    goto end
)

:: Check if Docker is running
docker info >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Docker is installed but not running.
    echo Please open Docker Desktop and wait until the status is "Docker is running".
    echo Close this window and run the installer again.
    echo.
    goto end
)

:: Check if Docker Compose is available
docker compose version >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Docker Compose is not available.
    echo Make sure you are using Docker Desktop with Compose V2.
    echo.
    goto end
)

:: Start the containers
echo.
echo Starting containers with Docker Compose...
docker compose up -d

:: Wait a few seconds to allow the containers to initialize
timeout /t 10 >nul

:: Automatically open the browser
start http://localhost:3000

echo.
echo ======================================
echo The application was started successfully!
echo Access it at: http://localhost:3000
echo ======================================

:end
echo.
pause
