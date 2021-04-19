function evaluar() {
    var matMat = document.getElementById("matM").value
    var evaMat = document.getElementById("examM").value
    var asiMat = document.getElementById("asisM").value

    var matSci = document.getElementById("matS").value
    var evaSci = document.getElementById("examS").value
    var asiSci = document.getElementById("asisS").value

    var matSoc = document.getElementById("matSo").value
    var evaSoc = document.getElementById("ExamSo").value
    var asiSoc = document.getElementById("asisSo").value

    var matSpa = document.getElementById("matSp").value
    var evaSpa = document.getElementById("ExamSp").value
    var asiSpa = document.getElementById("asisSp").value

    var matArt = document.getElementById("matA").value
    var evaArt = document.getElementById("ExamA").value
    var asiArt = document.getElementById("asisA").value

    var matTot = (parseFloat((matMat + evaMat + asiMat) / 3))
    var sciTot = (parseFloat((matSci + evaSci + asiSci) / 3))
    var socTot = (parseFloat((matSoc + evaSoc + asiSoc) / 3))
    var spaTot = (parseFloat((matSpa + evaSpa + asiSpa) / 3))
    var artTot = (parseFloat((matArt + evaArt + asiArt) / 3))

    if (parseInt((matTot + sciTot + socTot + spaTot + artTot) / 5) >= 3.5) {
        alert("Aprueba el periodo academico")
    } else if (parseInt((matTot + sciTot + socTot + spaTot + artTot) / 5) >= 3 && parseInt((matTot + sciTot + socTot + spaTot + artTot) / 5) < 3.5) {
        alert("Compromiso de recuperacion")
    } else if (parseInt((matTot + sciTot + socTot + spaTot + artTot) / 5) < 3) {
        alert("Perdio el periodo academico")
    }









}