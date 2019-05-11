import swal from 'sweetalert';

function searchDataCrime() {
    return new Promise((resolve, reject) => {

        fetch('https://data.police.uk/api/crime-categories')
            .then(res => res.json())
            .then(res => {
                resolve(res)
            }).catch(e => {
                reject({ message: "Something Went Wrong..." })
            })

    })

}

function searchDataFroces() {
    return new Promise((resolve, reject) => {

        fetch('https://data.police.uk/api/forces')
            .then(res => res.json())
            .then(res => {
                resolve(res)
            }).catch(e => {
                reject({ message: "Something Went Wrong..." })
            })

    })

}


function screenData(crimeCategory, forcelocation) {
    return new Promise((resolve, reject) => {
        if (crimeCategory !== "" && forcelocation !== "") {
            fetch(`https://data.police.uk/api/crimes-no-location?category=${crimeCategory}&force=${forcelocation}`)
                .then(res => res.json())
                .then(res => {
                    resolve(res)
                }).catch(e => {
                    reject({ message: "Something Went Wrong..." })
                })
        } else {
            swal({
                title: "Select Category and Force",
                buttons: false,
                text: "",
                timer: 1500,
            });
        }

    })

}

export {
    searchDataCrime,
    searchDataFroces,
    screenData
}