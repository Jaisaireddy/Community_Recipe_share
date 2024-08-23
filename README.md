# Web Application: Community Recipe Sharing Platform

## Overview
The Community Recipe Sharing Platform is a modern, interactive web application that enables users to share, discover, and rate recipes from all over the world. It’s designed to foster a community of food enthusiasts, from amateur home cooks to professional chefs, allowing them to connect, share their culinary creations, and explore new dishes.

## 3-tier AWS architecutre diagram

![AWS_3_tier_architecture](https://github.com/user-attachments/assets/f460aa64-c45e-4736-93b4-9d6aece9bdfe)

## Key Features

### 1. User Profiles
- **Profile Creation**: Users can create and customize their profiles, including adding profile pictures and a bio.
- **Personal Recipe Collections**: Each user can manage their collection of shared recipes, track their favorite recipes, and follow other users to stay updated on their latest posts.

### 2. Recipe Sharing
- **Recipe Submission**: Users can submit their own recipes, including detailed instructions, ingredient lists, and photos.
- **Recipe Browsing**: Users can explore a wide variety of recipes posted by others, categorized by cuisine, difficulty, and popularity.

### 3. Feedback and Ratings
- **Recipe Ratings**: Users can rate recipes they’ve tried, helping others find the best dishes.
- **Commenting System**: Users can leave comments on recipes to provide feedback, ask questions, or share their experiences.

### 4. Media Management
- **Profile Pictures and Recipe Images**: The platform supports the upload and display of user profile pictures and recipe images, which are stored securely and served efficiently.

## Technical Architecture

The application is built using a modern 3-tier architecture, leveraging AWS services to ensure scalability, security, and high availability.

### 1. Presentation Layer
- **Frontend (React)**: The user interface is built using React, providing a responsive and dynamic experience. The React app is stored in an Amazon S3 bucket and served globally via Amazon CloudFront for fast and reliable access.
- **Static and Media Files**: User-uploaded media, such as profile pictures and recipe images, are stored in an Amazon S3 bucket dedicated to media content.

### 2. Application Layer
- **Backend (Django)**: The application’s business logic is handled by a Django backend, which is deployed on Amazon EC2 instances. The Django app processes user requests, interacts with the database, and serves API endpoints.
- **Load Balancing**: An Application Load Balancer (ALB) distributes incoming traffic across multiple EC2 instances, ensuring even load distribution and high availability.

### 3. Data Layer
- **Database (RDS)**: The application’s data, including user profiles, recipes, and comments, is stored in a managed PostgreSQL database hosted on Amazon RDS. The database is configured for high availability and automated backups.

### 4. Monitoring and Security
- **Monitoring (CloudWatch)**: The application is monitored using AWS CloudWatch, which tracks performance metrics, logs, and alerts to ensure the application is running smoothly.
- **Security**: The architecture is secured using VPCs, security groups, and IAM roles. Sensitive data is stored securely, and all communications are encrypted using SSL/TLS.

## Deployment and Scalability
- The architecture is designed to scale with user demand. The EC2 instances hosting the Django app are part of an Auto Scaling group that automatically adjusts the number of instances based on traffic.
- The React frontend and media files are distributed globally via CloudFront, ensuring low latency for users around the world.

## Target Audience
This platform is ideal for anyone interested in cooking, whether they are looking to share their own recipes or discover new ones. It’s designed to be user-friendly and accessible, with features that cater to both casual cooks and professional chefs.
