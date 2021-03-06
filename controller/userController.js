class UserController {

    constructor(formId, tableId){

        this.fomrEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
    }

    onSubmit(){
        
        this.fomrEl.addEventListener("submit", event =>{

            event.preventDefault();

            let values = this.getValues();

            

            this.getPhoto((content)=>{

                values.photo = content;
                this.addlinha(values);

            });

            

        });
    }

    getPhoto(callback){

        let fileReader = new FileReader();

        let elements = [...this.fomrEl.elements].filter(item=>{

            if (item.name ==="photo"){
                return item;
            }
        });

        let file = elements[0].files[0];

        fileReader.onload = ()=>{

            callback(fileReader.result);
        };

        fileReader.readAsDataURL(file);

    }


    getValues(){

        let user = {};

        [...this.fomrEl.elements].forEach(function(campo, index){

            if(campo.name == "gender" && campo.cheked){
               
                // atribuindo os valos dos campos no json
                user[campo.name] = campo.value;
        
            }else {
                // atribuindo os valos dos campos no json
                user[campo.name] = campo.value;
            }
        
        });
    
        return new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin);
        
    }

    addlinha(dataUser){

        this.tableEl.innerHTML = `
                    <tr>
                        <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
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
 
    

}