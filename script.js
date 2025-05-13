document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#movie-list ul")
    const forms = document.forms

    /* delete movies*/
    list.addEventListener("click", function (e) {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            if(confirm("Are you sure you want to delete this movie?")) {
                 /* remove the li element*/
            li.parentNode.removeChild(li);
                alert("Movie deleted successfully!");
            } else {
                alert("Movie not deleted!");
            }
           
        }
    })

    /*add movie*/
    const addMovieForm = forms['add-movie']
    addMovieForm.addEventListener("submit", function (e) {
        e.preventDefault();

        /* create elements*/
        const value = addMovieForm.querySelector('input[type="text"]').value;

        /* check if the input is empty*/
        if (!value) {
            alert("Please enter a movie name!");
            return;
        }


        const li = document.createElement('li');
        const movieName = document.createElement('span')
        const deleteBtn = document.createElement('span')

        /* adding content*/
        movieName.textContent = value;
        deleteBtn.textContent = 'Delete';

        /* adding classes*/
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        /* append to DOM*/
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        /* reset the form*/
        addMovieForm.reset();
    })

})
