const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');
let tree = document.createElement('ul');
tree.id = 'tree';
rootNode.appendChild(tree);
createTree(data, tree);

let menu = document.createElement('div');
menu.setAttribute('class', 'menu');
menu.setAttribute('id', 'ctxMenu');
rootNode.appendChild(menu);
let rename = document.createElement('a');
rename.setAttribute('class','item');
rename.setAttribute('href','#');
rename.setAttribute('id','rename');
rename.textContent = 'Rename';
menu.appendChild(rename);
let del = document.createElement('a');
del.setAttribute('class','item');
del.setAttribute('href','#');
del.setAttribute('id','delete');
del.textContent = 'Delete';
menu.appendChild(del);

document.querySelector('#rename').addEventListener('click', () => {
  alert('Here might be rename-function');
});
document.querySelector('#delete').addEventListener('click', () => {
  alert('Here might be delete-function');
});

tree.addEventListener('contextmenu',function(event){
  event.preventDefault();
  const ctxMenu = document.getElementById('ctxMenu');
  ctxMenu.style.display = 'flex';
  ctxMenu.style.flexDirection = 'column';
  ctxMenu.style.left = `${event.clientX}px`;
  ctxMenu.style.top = `${event.clientY}px`;
},false);

rootNode.addEventListener('click',function(){
  const ctxMenu = document.getElementById('ctxMenu');
  ctxMenu.style.display = '';
  ctxMenu.style.left = '';
  ctxMenu.style.top = '';
},false);


let dir = document.getElementsByClassName('directory');
let i;

for (i = 0; i < dir.length; i++) {
  dir[i].addEventListener('contextmenu', function (event) {

    event.preventDefault();

  });
  dir[i].addEventListener('click', function() {
    const file = this.parentElement.querySelector('.file');
    const icon = this.parentElement.querySelector('.material-icons');
    if (file !== null) {
      file.classList.toggle('active');
      if (icon.textContent === 'folder') {
        icon.textContent = 'folder_open';
      } else {
        icon.textContent = 'folder';
      }
    }
  });
}

function createTree(data, parentNode) {
  for(let i=0; i < data.length; i++) {
    let object = data[i];
    if (object.folder) {
      let dir = addDirectory(object, parentNode);
      if (object.children) {
        createTree(object.children, dir)
      } else {
        dir.append('Folder is empty')
      }
    } else {
      addFile(object, parentNode);
    }
  }
}



function addDirectory(object, parentNode) {
  let item = document.createElement('li');
  let icon = document.createElement('i');
  icon.textContent = 'folder';
  icon.setAttribute('class', 'material-icons');
  item.appendChild(icon);
  let span = document.createElement('span');
  span.textContent = object.title;
  span.setAttribute('class', 'directory');
  item.appendChild(span);
  let list = document.createElement('ul');
  list.setAttribute('class', 'file');
  item.appendChild(list);
  parentNode.appendChild(item);

  return list;
}

function addFile(object, parentNode, isActive = false) {
  let div = document.createElement('div');
  div.setAttribute('class','container');
  parentNode.appendChild(div);
  let iconFile = document.createElement('i');
  iconFile.textContent = 'insert_drive_file';
  iconFile.setAttribute('class', 'material-icons');
  iconFile.setAttribute('id','iconFile');
  div.appendChild(iconFile);
  let file = document.createElement('li');
  file.textContent = object.title;
  if (isActive) {
    file.setAttribute('class', 'active');
  }
  div.appendChild(file);
}