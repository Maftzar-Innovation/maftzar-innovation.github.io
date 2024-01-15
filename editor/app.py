from flask import Flask, request, render_template

app = Flask(__name__)

ARTICLE_CSV = "../markdowns/stories1.csv"

def add_to_csv(title, description, link, image):
    print("Writing to csv")
    with open(ARTICLE_CSV, 'a') as f:
        f.write(f"\n5,{title},{description},{link},{image}")


@app.route('/editor.html', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Access form data using request.form
        form_data = request.form.to_dict().get("content")
        file_name = request.form.to_dict().get("title") + ".md"
        file_name =  file_name
        print(request.form)
        print(request.form.to_dict())
        print(f'Received form data: {form_data}')
        if form_data:
            f = open("../markdowns/" + file_name, "w")
            f.write(form_data)
            f.close()

            add_to_csv(file_name, file_name, file_name, "pics/storyImg.jpg")

        else:
            print("no data")
    return {"hello":"world"}


if __name__ == '__main__':
    app.run(debug=True)
