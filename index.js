
            function saveToLocalStorage(event) {
                event.preventDefault();
                const name=event.target.name.value;
                const mail=event.target.mail.value
             const object = {name,mail}
              let obj_serialised=JSON.stringify(object);
              //let obj_deserialised=JSON.per(obj_serialised);
              localStorage.setItem(object.mail, obj_serialised);
              showDetailsOnScreen(object)
            }

            window.addEventListener("DOMContentLoaded", (event) => {
          Object.keys(localStorage).forEach(key => {
            const user = JSON.parse(localStorage.getItem(key));
            showDetailsOnScreen(user)
          })
            })

             function showDetailsOnScreen(user) {
               if(localStorage.getItem(user.mail) !== null){
                removeUserFromScreen(user.mail);
               }
              let parentNode=document.getElementById("userslist");
              let childNodeHTML=`<li id='${user.mail}'> ${user.name} - ${user.mail} 
                <button onclick = deleteUser('${user.mail}')> DeleteUser </button>
                <button onclick = editUserDetails('${user.mail}','${user.name}') > EditUser </button>
            </li>`
                  parentNode.innerHTML = parentNode.innerHTML + childNodeHTML;
                };
            
              //delete useremail
                 function deleteUser(mailId){
                    localStorage.removeItem(mailId);
                    removeUserFromScreen(mailId)
                 }
            
                 function removeUserFromScreen(mailId){
                    let parentNode=document.getElementById("userslist");
                    let childNodeToBeDeleted=document.getElementById(mailId)
                    if(childNodeToBeDeleted){
                        parentNode.removeChild(childNodeToBeDeleted);
                    }
                 }
                     
                 //editing 
                 function editUserDetails( mailId,name ) {
                   document.getElementById("mail").value = mailId;
                   document.getElementById("name").value = name;
                    deleteUser(mailId)
                    }
