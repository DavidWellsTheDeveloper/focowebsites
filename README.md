# focowebsites
Refactored Consulting site using Django.

## Prerequisites
pip3 is installed on machine (preferably alias pip=pip3)
python3 is installed on machine (perferably alias python=python3)
virtualenv is installed.
Verify that `startup.development.sh` is executable. If not run `chmod u+x startup.development.sh`


## Getting Started
* Development works best on Linux or Mac, you may need to adjust startup script to use windows.
* Clone this repository.
* Run **startup.development.sh** from a terminal to get a virtual environment set up with django dependencies.
* Activate virtual environment from django root folder (where manage.py is). **source venv/bin/activate**
* To start server run **python manage.py runserver**
* To enter admin interface navigate to localhost:8000/admin (you will need to create your own superuser)
* To view solution navigate to localhost:8000.
