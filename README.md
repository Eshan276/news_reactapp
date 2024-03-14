# news_reactapp

This is a News Webapp , backend was developed by django and NEwsapi has been used. It is also deployed serverlessly in AWS EC2. Now the frontend part is created using React and staticlly hosted using S3

Deployed Project- [Newsapp](http://newsappeshan.s3-website.ap-south-1.amazonaws.com/#latest-news)
1. **Clone the Repository**: Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/Eshan276/news_reactapp.git
```

2. **Backend Setup**:
   -run this commands
```bash
   cd newsapp
```
  -We will install django and other necessary packages
```bash
pip install django
```
```bash
pip install djangorestframework pyyaml requests django-cors-headers
```
  -Now we have to fix the migration
```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```
  -Now we will run the server in our local host 
```bash
python manage.py runserver
```
Once the server is hosted, head over to http://127.0.0.1:8000/home/ for the App.

3. **Frontend Setup**:
   -go back to root folder
```bash
  cd..
```
  -Go inside newsapi_ft/newsapp
```bash
  cd newsapi_ft/newsapp
```
  -Now we will install dependencies
```bash
npm install
```
  -Now run the react app localy 
```bash
npm run dev
```

