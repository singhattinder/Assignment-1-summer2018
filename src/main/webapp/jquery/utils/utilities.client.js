function UtilitiesClient() {
    this.isEmpty = isEmpty;


    function isEmpty(data) {
        if (data.length===0 || data.toString()===""){
            return true;
        }
        else {
            return false;
        }

    }

}

