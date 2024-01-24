from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/pokemon.html', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Access form data using request.form
        form_data = request.form.get("cool", "", type=str)
        print(f'Received form data: {form_data}')
        if form_data:
            f = open("texts/mytext.me", "w")
            f.write(form_data)
            f.close()

        else:
            print("no data")
    return render_template('pokemon.html')


if __name__ == '__main__':
    app.run(debug=True)
