# Laravel React Job Board

A web application for browsing and managing jobs with Laravel and React.

## Features

1. User registration and authentication
2. Browse all public jobs
3. Search and filter jobs
4. Authenticated users can manage their own jobs
5. View only the jobs created by the logged-in user
6. Display job details with full information

## Local Setup

> [!TIP]
> Ensure your environment is ready. You will need PHP 8.2, Composer and Node.js installed and the commands `php`, `composer`, `node` and `npm` should be available in your terminal.

### 1. Clone the repository

```
git clone <repository-url>
```

### 2. Navigate to the project folder

```
cd <project-folder>
```

### 3. Copy the environment file

```
cp .env.example .env
```

### 4. Configure environment variables

Open `.env` and update the database credentials as needed.

### 5. Install PHP dependencies

```
composer install
```

### 6. Generate the application key

```
php artisan key:generate 
``` 

### 7. Run database migrations and seed dummy data

```
php artisan migrate --seed
```

### 8. Start the Laravel development server 

```
php artisan serve
```

### 9. Navigate to the react folder

Run this command in a separate terminal.

```
cd react
```

### 10. Copy the React environment file

```
cp .env.example .env
```

> [!NOTE]
> `VITE_API_BASE_URL` should match your Laravel backend URL if it’s different.

### 11. Install JavaScript dependencies

```
npm install
```

### 13. Start the Vite development server

```
npm run dev
```