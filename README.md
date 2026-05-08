# Crohn's and Colitis Canada — Website

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed and running

## Running the app

**1. Clone the repository**

```bash
git clone https://github.com/ndr2084/crohns-colitis-website.git
cd crohns-colitis-website
```

**2. Build and start the container**

```bash
docker compose up --build
```

The first run will take a few minutes while Docker installs dependencies and builds the app.

**3. Open the app**

Visit [http://localhost:4200](http://localhost:4200) in your browser.

## Stopping the app

```bash
docker compose down
```

## Subsequent runs

After the first build, you can start the app without rebuilding:

```bash
docker compose up
```

Only run `--build` again if the source code has changed.
