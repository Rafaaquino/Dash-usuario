var campos = document.querySelectorAll("#form-user-create [name]");

//json
var user = {};

function addlinha(dataUser){

    document.getElementById("usuarios").innerHTML = `
                <tr>
                    <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                    <td>${dataUser.name}</td>
                    <td>${dataUser.email}</td>
                    <td>${dataUser.admin}</td>
                    <td>${dataUser.birth}</td>
                    <td>
                      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                    </td>
                </tr>`;

}

document.getElementById("form-user-create").addEventListener("submit", function(event){

    event.preventDefault();

    campos.forEach(function(campo, index){

        if(campo.name == "gender" && campo.cheked){
           
            // atribuindo os valos dos campos no json
            user[campo.name] = campo.value;
    
        }else {
            // atribuindo os valos dos campos no json
            user[campo.name] = campo.value;
        }
    
    });

    var objectUser = new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin);
    
    addlinha(user);

});

