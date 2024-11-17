
# DriveScape: : AI-Driven Car Customization Platform

Drivescape is an innovative platform that allows users to customize any feature of their car through Generative AI. By leveraging Replicate AI's **InstructPix2Pix** model, users can upload an image of their car and personalize it by modifying features like the dashboard, wheels & rims, seat fabric, body paint, and headlights/taillights. The AI model processes these inputs and generates a high-quality, customized version of the car image in real time.

## Features

- **Comprehensive Car Customization**: Modify key car features such as dashboard, wheels & rims, seat fabric, body paint & finish, and headlights & taillights. You can even add custom features to make your car truly unique.

- **Design Type Selection**: Record your answers directly on the platform for seamless integration and easy review.

- **Refined Customization with Additional Requirements**: Add specific preferences or additional requirements to further refine your car’s customization. This allows for a highly personalized design, ensuring the result matches your exact vision.

- **Generative AI-Powered Image Generation**: Uses Replicate AI’s InstructPix2Pix model to process the uploaded image and apply customizations. The AI model generates a high-quality, realistic image based on the selected features and design style.

- **Downloadable High-Resolution Custom Designs**: Once the car image is generated, you can easily download your personalized car design in high resolution, ready for use or sharing.

- **User Authentication**: Secure registration and login using Clerk, ensuring your data is safe.

## How It Works

Drivescape offers a seamless car customization experience powered by Generative AI. Once logged in via Clerk using Google or Facebook, users can upload a JPEG or PNG image of their car. After uploading, users can select specific features they want to customize, including the *dashboard, wheels & rims, seat fabric, body paint & finish, headlights & taillights*, and even custom features. Additionally, users can choose from various design types such as **Modern, Sporty, Luxury, Minimalistic, Traditional, and Rustic**, to set the desired aesthetic of their car. To further personalize the design, users can add specific preferences or additional requirements. Once the user has made their selections, they click the Generate button, triggering the AI to process the customization. The platform utilizes **Replicate AI’s InstructPix2Pix model**, which has been *fine-tuned with 300 car images to deliver highly accurate and realistic outputs*. This fine-tuning ensures that the model can effectively apply the user-selected modifications and design style to the uploaded car image. The result is a high-quality, customized car design that users can download in real-time and in high resolution.

## Technologies Used

- **Next.js**: Framework for building the frontend and backend, providing server-side rendering and API routes.
- **Clerk**: Authentication service for managing user registration, login, and session management.
- **Drizzle ORM**: Object-Relational Mapper for interacting with the PostgreSQL database, simplifying data queries and management.
- **Replicate AI**: A powerful AI model used to generate customized car images based on user inputs. The model applies chosen modifications to the uploaded image and produces realistic results.
- **Neon**: Serverless PostgreSQL with dynamic scaling and advanced features for optimized database performance.
- **Tailwind CSS:** A utility-first CSS framework used to design responsive, customizable, and visually appealing UI components.
- **Firebase:** Used for storing user-uploaded images and generated AI images securely in the cloud, with easy access and scalability.






