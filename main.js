student_array = [];
function submit() {
    var name1 = document.getElementById("S1").value;
    var name2 = document.getElementById("S2").value;
    var name3 = document.getElementById("S3").value;
    var name4 = document.getElementById("S4").value;
    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    student_array.push(name4);
    console.log(student_array);
    document.getElementById("display_name").innerHTML = student_array;
    document.getElementById("sub").style.display = "none";
    document.getElementById("srt").style.display = "inline-block";
}
function sorting() {
    student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML = student_array;
}