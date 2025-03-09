# 🛫 AHA AIRLINE

## Introduction
The **AHA AIRLINE** is a web-based platform that allows customers to search, book, and manage their flight tickets seamlessly. It also provides an admin panel to manage flights, aircraft, and related data efficiently.

## Technologies Used
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: .NET Core, ASP.NET Web API
- **Database**: SQL Server
- **State Management**: React Context API / Redux
- **Authentication**: JWT (JSON Web Token) Authentication
- **API Handling**: Axios / Fetch API

## Features

### Customer Features
- **View General Information & Flight Details**: Browse flight schedules, available routes, and airline details.
- **Search for Flights**: Find flights based on departure/arrival locations, date, and class type.
- **Book Tickets**: Securely reserve and purchase tickets for available flights.
- **Cancel Tickets**: Cancel bookings within the allowed timeframe for a refund (if applicable).
- **Track Booked Flights**: View past and upcoming bookings, including boarding details and flight status updates.

### Admin Features
- **Manage Aircraft**: Add, edit, or delete aircraft details (name, model, manufacturer, status, etc.).
- **Manage Flights**: View, update, or remove flight information such as schedules, prices, and available seats.

## Demo
### HomePage
![Ảnh chụp màn hình 2025-03-09 223855](https://github.com/user-attachments/assets/b43770ad-8e5a-41c2-b230-680ee9908f11)
![Ảnh chụp màn hình 2025-03-09 223910](https://github.com/user-attachments/assets/fc45d908-a8f1-4c81-8c6d-bb229b92c671)
![image](https://github.com/user-attachments/assets/1c84b1a2-ff53-4e2c-b354-a63b62c35ee3)

### TicketPage
![Ảnh chụp màn hình 2025-03-09 224124](https://github.com/user-attachments/assets/594df529-db7d-47d5-8e35-dbd75bbe43d9)
![Ảnh chụp màn hình 2025-03-09 224149](https://github.com/user-attachments/assets/09b35e22-b194-47ae-8216-25f5c4060fd9)
![Ảnh chụp màn hình 2025-03-09 224210](https://github.com/user-attachments/assets/eea5db6a-124a-47ca-8e92-38e220520573)

### TicketCart
![Ảnh chụp màn hình 2025-03-09 225120](https://github.com/user-attachments/assets/8ff8de8c-1226-4de7-a21a-3bf809fc9bb6)
![Ảnh chụp màn hình 2025-03-09 225148](https://github.com/user-attachments/assets/a2ee6a34-75e8-4524-98d6-154fd600094a)

### Information Form
![Ảnh chụp màn hình 2025-03-09 225255](https://github.com/user-attachments/assets/09b3a86e-a7fc-44c0-a4bb-4f0f0c52413c)
![Ảnh chụp màn hình 2025-03-09 225313](https://github.com/user-attachments/assets/3e8aafda-218f-4ba4-8a74-5f4f82009eea)

### Show Ticket 
![Ảnh chụp màn hình 2025-03-09 225407](https://github.com/user-attachments/assets/eafa6595-831a-4464-9f95-0269275b696c)
![Ảnh chụp màn hình 2025-03-09 225419](https://github.com/user-attachments/assets/e70381e7-f80b-4fbb-b38e-181364a2a57e)

Print Ticket
![Ảnh chụp màn hình 2025-03-09 225532](https://github.com/user-attachments/assets/e1cb9912-415a-42fe-bad8-8c2cd81458e5)
![Ảnh chụp màn hình 2025-03-09 225539](https://github.com/user-attachments/assets/0d4bd896-f5c6-4751-974f-661d3c141040)


### AdminPage
![Ảnh chụp màn hình 2025-03-09 223120](https://github.com/user-attachments/assets/b9332bf8-849a-4c32-829d-79a15152ea77)

### Other Page
![Ảnh chụp màn hình 2025-03-09 224501](https://github.com/user-attachments/assets/dacfd0f3-c925-4b1a-866b-0493ec597dde)
![Ảnh chụp màn hình 2025-03-09 224509](https://github.com/user-attachments/assets/4576eef8-f7a1-4c6d-b248-b1d464e3d470)

![Ảnh chụp màn hình 2025-03-09 224611](https://github.com/user-attachments/assets/4849eb3b-dec6-4eae-af1d-ab146ef752b0)
![Ảnh chụp màn hình 2025-03-09 224625](https://github.com/user-attachments/assets/d4c11d62-db65-4ad8-a60d-b24616c9d7c0)
![Ảnh chụp màn hình 2025-03-09 224635](https://github.com/user-attachments/assets/df496135-1ee0-4a92-980b-75b15891b229)
![Ảnh chụp màn hình 2025-03-09 224647](https://github.com/user-attachments/assets/38c29344-07a5-4809-881e-27e8b01b088e)
![Ảnh chụp màn hình 2025-03-09 224656](https://github.com/user-attachments/assets/c62883c3-04c0-4a6a-b352-8d3fd7e94337)

![Ảnh chụp màn hình 2025-03-09 224755](https://github.com/user-attachments/assets/67e257c0-1bea-4d4e-99d2-d8a72d60412a)
![Ảnh chụp màn hình 2025-03-09 224804](https://github.com/user-attachments/assets/a4e3f219-65e9-4b71-8ab5-523bc763d4e0)
![Ảnh chụp màn hình 2025-03-09 224810](https://github.com/user-attachments/assets/981cc97e-2746-48c1-ac8c-739fb1fd07a7)

## Future Development Plans
### Upcoming Features
   - Implement a feature for admins to post updates about discounts and important notices.
   - Currently, all images are stored manually within the project. Plan to migrate to cloud storage (e.g., AWS S3, Firebase Storage) for better scalability and performance.

### Improvements
- **Enhancing Search & Filtering**: Improve the search functionality by adding filters such as flexible dates, multi-city flights, and airline preferences.
- **Seat Selection Feature**: Allow users to select seats during the booking process.
- **Loyalty & Rewards System**: Introduce a frequent flyer program to reward returning customers.
- **Real-Time Flight Updates**: Integrate real-time flight status tracking for better user experience.
- **Multi-Language Support**: Add support for multiple languages to reach a broader audience.
- **Payment Gateway Integration**: Expand payment options with PayPal, Stripe, and other popular services.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to suggest improvements.

---
