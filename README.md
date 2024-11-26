# Smart Agriculture Farming

## Project Overview
Smart Agriculture Farming is a web application developed to assist farmers in making informed agricultural decisions using machine learning and deep learning. The project is divided into three key modules:
-	**Crop Recommendation:** Suggests the best crop to grow based on environmental and soil conditions.
-	**Fertilizer Recommendation:** Recommends optimal fertilizer combinations based on crop requirements and soil properties.
-	**Crop Disease Prediction:** Detects and identifies crop diseases from images, helping farmers take timely actions.
  
## Features
-	Crop Recommendation: Uses machine learning to suggest crops suitable for specific conditions.
-	Fertilizer Recommendation: Suggests appropriate fertilizers for optimal crop growth.
-	Crop Disease Prediction: Utilizes deep learning to analyze images of crops and detect diseases, offering quick and reliable diagnoses.
  
## Project Structure
### The project structure includes:
-	Frontend: A user-friendly interface for interacting with the recommendation and prediction modules.
-	Backend: Machine learning and deep learning models for prediction, powered by Python, Flask, and OpenCV.
-	Database: Stores crop, fertilizer, and disease data to support recommendations and predictions.
  
# Built with 🛠️
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://github.com/tomchen/stack-icons/raw/master/logos/bootstrap.svg"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
<code><img height="30" src="https://symbols.getvecta.com/stencil_80/56_flask.3a79b5a056.jpg"></code>
<code><img height="30" src="https://cdn.iconscout.com/icon/free/png-256/heroku-225989.png"></code>

<code><img height="30" src="https://raw.githubusercontent.com/numpy/numpy/7e7f4adab814b223f7f917369a72757cd28b10cb/branding/icons/numpylogo.svg"></code>
<code><img height="30" src="https://raw.githubusercontent.com/pandas-dev/pandas/761bceb77d44aa63b71dda43ca46e8fd4b9d7422/web/pandas/static/img/pandas.svg"></code>
<code><img height="30" src="https://matplotlib.org/_static/logo2.svg"></code>
<code><img height="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1280px-Scikit_learn_logo_small.svg.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/pytorch/pytorch/39fa0b5d0a3b966a50dcd90b26e6c36942705d6d/docs/source/_static/img/pytorch-logo-dark.svg"></code>


## How to use 💻
- Crop Recommendation system ==> enter the corresponding nutrient values of your soil, state and city. Note that, the N-P-K (Nitrogen-Phosphorous-Pottasium) values to be entered should be the ratio between them. Refer [this website](https://www.gardeningknowhow.com/garden-how-to/soil-fertilizers/fertilizer-numbers-npk.htm) for more information.
Note: When you enter the city name, make sure to enter mostly common city names. Remote cities/towns may not be available in the [Weather API](https://openweathermap.org/) from where humidity, temperature data is fetched.

- Fertilizer suggestion system ==> Enter the nutrient contents of your soil and the crop you want to grow. The algorithm will tell which nutrient the soil has excess of or lacks. Accordingly, it will give suggestions for buying fertilizers.

- Disease Detection System ==> Upload an image of leaf of your plant. The algorithm will tell the crop type and whether it is diseased or healthy. If it is diseased, it will tell you the cause of the disease and suggest you how to prevent/cure the disease accordingly.
Note that, for now it only supports following crops

<details>
  <summary>Supported crops
</summary>

- Apple
- Blueberry
- Cherry
- Corn
- Grape
- Pepper
- Orange
- Peach
- Potato
- Soybean
- Strawberry
- Tomato
- Squash
- Raspberry
</details>

  
## Installation and Setup
### To run this project locally, follow these steps:
1.	Clone the Repository:
```
git clone https://github.com/myself-nahid/Smart-Agriculture-Farming.git
cd Smart-Agriculture-Farming
```
2.	Install Dependencies: Install all required packages listed in requirements.txt.
```
pip install -r requirements.txt
```
3.	Run the Application: Start the Flask server.
```
python app.py
```
4.	Access the Application: Open your web browser and go to http://127.0.0.1:5000 to use the application.
Usage
-	Crop Recommendation: Enter the soil and climate data to receive crop suggestions.
-	Fertilizer Recommendation: Input the crop type and soil properties to get fertilizer recommendations.
-	Crop Disease Prediction: Upload an image of a crop, and the system will detect potential diseases and provide diagnostic information.
## Contributing
Contributions are welcome! If you find any issues or have ideas for improvements, feel free to create a pull request or open an issue.

## Contact
For any questions or further information, please contact [nahidhasan9613@gmail.com].

