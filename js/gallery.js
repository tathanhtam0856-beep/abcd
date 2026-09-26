/*Name this external file gallery.js*/

function upDate(previewPic){
    /* 1) Thay đổi url cho background image của thẻ div có id = "image" 
          thành nguồn ảnh (src) của ảnh preview đang được di chuột vào */
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    
    /* 2) Thay đổi văn bản của thẻ div có id = "image" 
          thành alt text của ảnh preview */
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
    /* 1) Đặt lại url cho background image của thẻ div có id = "image" 
          về giá trị ban đầu. Theo file gallery.css, giá trị ban đầu là rỗng: url('') */
    document.getElementById("image").style.backgroundImage = "url('')";
    
    /* 2) Thay đổi văn bản của thẻ div có id = "image" 
          về văn bản gốc ban đầu. Theo file index.html gốc, đó là:
          "Hover over an image below to display here." */
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}