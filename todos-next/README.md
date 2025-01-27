# DEVELOPMENT MODE

Run app in dev

1. Run DB
```
docker compose up -d
```

2. Prisma commands

  - Init prisma
  ```
    npx prisma init
  ```

  - Run migrations
  ```
    npx prisma migrate dev
  ```
  
  - Generate Prisma client
  ```
    npx prisma generate
  ```

  - Make a request to /api/seed to generate Seed

3. Create a copy env.template to .env and fill with your data
