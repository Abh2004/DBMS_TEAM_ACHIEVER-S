# TEAM ACHIEVERS
Abhishek singh Maurya (21CS10001)
Soumik Mandal (21CS10063)
Harsh Sharma(21CS10030)
Tohutu Sema (21CS10072)


# WILDLIFE DATABASE

Briefly describe what the project is about.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Set up MongoDB:

   - Install MongoDB and start the server.
   - Ensure the MongoDB connection settings in `mongo_connect.py` are correct.

4. Apply database migrations:

   ```bash
   python manage.py migrate
   ```

5. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

## Usage

1. Register a new user using the `/api/register/` endpoint.
2. Log in using the `/api/login/` endpoint to obtain an authentication token.
3. Use the provided API endpoints to perform CRUD operations on animals, images, articles, and videos.
4. Use the search endpoint `/api/search/` to search for articles, images, and videos based on user input.

## Models

### User

- Inherits from Django's `AbstractUser` model and adds a `user_type` field.

### Animals

- Stores information about animals.

### Plants

- Stores information about plants.

### Images

- Stores image data along with metadata.

### Videos

- Stores video data along with metadata.

### Articles

- Stores articles along with metadata.

### Feedback

- Stores feedback related to articles, images, or videos.

## API Endpoints

- **Authentication**:
  - `/api/register/`: Register a new user.
  - `/api/login/`: Log in and obtain an authentication token.
  - `/api/logout/`: Log out and invalidate the authentication token.
  - `/api/is-auth/`: Check if the user is authenticated.

- **CRUD Operations**:
  - Animals: `/api/animals/`
  - Images: `/api/images/`
  - Videos: `/api/videos/`
  - Articles: `/api/articles/`

- **Search**:
  - `/api/search/`: Search for articles, images, and videos based on user input.

## Dependencies

- Django
- djongo
- djangorestframework
- gridfs
- pymongo
- pillow
- nltk

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

[MIT License](LICENSE)
