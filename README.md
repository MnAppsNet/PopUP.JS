# PopUP.JS
This is a simple script to easily display interactive popups on top of your website

# How to use
To display a popup you will have to constract it's html content that you want to display, pass the element names/ids which will trigger the closure of the popup and define a callback function that will be triggered on closure.
Those are the three parameters you need to pass to the **show()** method of the **popup** class.

# Example

```javascript
const content = '<strong>Do you want to delete this file?</strong>'
              + '<div><button name="YesButton">Yes</button><button name="NoButton">No</button></div>';
const buttonIds = ['YesButton','NoButton'];
const callback = function(buttonID){
    if(buttonID === 'YesButton'){
      //Yes button clicked
      }
    else{
     //No button clicked
    }
}
popup.show(content,buttonIds,callback);
```

# Style
Include the popup.css stylesheet in your website in order to display the popup content correctly. Fill free to modify it in order to fit your website's look.
