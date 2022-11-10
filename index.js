function onDragOver(event) {
  event.preventDefault();
  document.getElementById('container').classList.add('bg-green-100', 'border-2', 'border-gray-300')

}

function onDragLeave(event) {
  event.preventDefault();
  document.getElementById('container').classList.remove('bg-green-100', 'border-2', 'border-gray-300')
}

function onDrop(event) { 
  event.preventDefault();

  listImages(event.dataTransfer.files);
}

function inputOnChange(event) {
  listImages(event.target.files);
}

function listImages(files) {
  Object.keys(files).forEach((key) => {
    var file = files[key];
    var reader = new FileReader();
    reader.onloadend = () =>  {
      const img = document.createElement('img');
      const uuid = crypto.randomUUID();
      img.setAttribute('src', reader.result);
      img.setAttribute('id', uuid);
      img.setAttribute('onclick', `imageRemove('${uuid}')`)
      img.setAttribute('class','w-40 h-40  border-2 hover:opacity-50   rounded-xl');
      document.getElementById('images').appendChild(img);
    }

    reader.readAsDataURL(file);
  });

  document.getElementById('container').classList.remove('bg-green-100', 'border-gray-300')
  document.getElementById('container').classList.add('border-dashed')
}

function imageRemove(id) {
document.getElementById(id).remove();
}