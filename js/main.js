(() => {

    //make an AJAX request using FETCH API 
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {
            // debugger;
            console.log(data);
            setCourseDetail(data);
            //handleData
            //here's where you would call the function that puts the pieces on the page
        })

    .catch((err) => {
        console.log(err);
    })

    function setCourseDetail(data) {
       
        // course name & course code
        let courseName = document.querySelector('.course-name')
        courseName.innerHTML = data.coursename;

        courseName.parentElement.innerHTML += `<i class="text-primary font14">${data.coursecode}</i>`;

        // prof name
        document.querySelector('.prof-name').innerHTML = data.profname;

        // prof img
        let profImg = document.querySelector('.prof-img');
        profImg.setAttribute('src','images/eEdu_prof.jpg');

        // class time
        let classTime = document.querySelector('.class-time');
        data.classtime.forEach(v=>{
            classTime.innerHTML += `<li>${v}</li>`;
        })

        //course info
        document.querySelector('.course-title').innerHTML = data.coursename + `<i class="text-primary font14 mgLeft10">${data.coursecode}</i>`;
        document.querySelector('.course-desc').innerHTML = data.coursedesc;
    }

})();