class popup {

    //creates the topMost Panel that wil be displayed above all other content in website
    static createTopMostPanel() {
        const topMost = document.createElement("div");
        topMost.id = 'topMostPanel';
        topMost.style.display = 'flex';
        topMost.style.position = 'fixed';
        topMost.style.alignItems = 'center';
        topMost.style.justifyContent = 'center';
        topMost.style.flexDirection = 'column';
        topMost.style.top = '0';
        topMost.style.right = '0';
        topMost.style.width = '100%';
        topMost.style.height = '100%';
        topMost.style.background = '#00000033';
        topMost.style.zIndex = '999';
        return topMost;
    }

    //creates the popup panel inside of the topMost panel
    static createPopUp(content, topmost, callback, closePanelNameIdentifier) {
        const popUp = document.createElement("div");
        popUp.id = 'popUpPanel';
        popUp.style.width = '80%';
        popUp.style.height = 'auto';

        const popUpContent = document.createElement("div");
        popUpContent.id = 'popUpPanelContent';
        popUpContent.style.display = 'flex';
        popUpContent.style.alignItems = 'center';
        popUpContent.style.justifyContent = 'center';
        popUpContent.style.flexDirection = 'column';
        popUpContent.style.width = 'auto';
        popUpContent.style.height = 'auto';
        popUpContent.style.background = '#000000bf';
        popUpContent.style.color = 'white';
        popUpContent.style.paddingTop = '15px';
        popUpContent.style.paddingBottom = '15px';
        popUpContent.style.paddingRight = '5px';
        popUpContent.style.paddingLeft = '5px';
        popUpContent.style.borderRadius = '8px';
        popUpContent.style.fontFamily = 'Arial';
        popUpContent.style.textAlign = 'center';
        popUpContent.style.fontSize = 'medium';
        popUpContent.style.borderStyle = 'ridge';

        const closeButton = document.createElement("button");
        closeButton.id = 'popUpPanelCloseButton';
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.borderRadius = '5px';
        closeButton.style.background = '#00000000';
        closeButton.style.borderStyle = 'solid';
        closeButton.style.borderColor = 'white';
        closeButton.style.borderWidth = 'thin';
        closeButton.style.color = 'white';
        closeButton.addEventListener('click', function () {
            popup.close(topmost, callback, 'popUpPanelCloseButton')
        });

        popUpContent.innerHTML = content;

        popUp.append(closeButton);
        popUp.append(popUpContent);

        return popUp;
    }

    //Pass the content of the popup, an array of name indetifiers that will have the buttons that will close
    //the popup and a callback function that will be called when the popup is closed
    static show(content, closePanelNameIdentifiers, callback) {
        const topMost = this.createTopMostPanel();
        const popUp = this.createPopUp(content, topMost, callback);

        topMost.append(popUp);
        document.body.append(topMost);

        closePanelNameIdentifiers.forEach(itm => {
            document.getElementsByName(itm).forEach(itm2 => {
                itm2.addEventListener('click', function () {
                    popup.close(topMost, callback, itm)
                });
            })
        });
    }

    //Removes the topMost panel in order to reactivate the website and call the callback function
    //passing the name/id of the element that triggered the close event
    static close(topmost, callback, objectName) {
        callback(objectName);
        topmost.remove(); //Change 12.10.2020 - remove after the callback so on callback you will have the topmost panel content available
    }

}
