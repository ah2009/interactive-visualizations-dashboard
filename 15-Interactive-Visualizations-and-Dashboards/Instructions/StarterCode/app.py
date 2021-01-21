import json
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():

    # use render_template to serve up the index.html
    return render_template('index.html') # your-code-here

@app.route("/samples")
def samples():
    with open ('static/data/samples.json') as json_file:
        return json.load(json_file)



    # open the json file, located at static/data/samples.json
    # use json.load() to read in the file as json
    

        
        
            
    #  return that json through the Flask endpoinits
    

  

if __name__ == "__main__":
    app.run(debug=True)
#endpoint

#url ="http://robdunnlab.com/projects/belly-button-biodiversity/"


