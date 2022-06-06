const inputfields = document.querySelector('.input-fields')
const output = document.querySelector('.output')

let inputShow = true


async function TextEditor(element){
  const newEditor =  await ClassicEditor
  .create(element,{
    toolbar: [ 'heading', 'bold', 'bulletedList', 'numberedList' ],
  } )
  return newEditor
 
}

let workHistorydetails;
TextEditor(inputfields["work_hist"]).then(nEditor=>{
  workHistorydetails = nEditor
})

let Affiliations;
TextEditor(inputfields["affiliations"]).then(nEditor=>{
  Affiliations = nEditor
})

let Skills;
TextEditor(inputfields["skills"]).then(nEditor=>{
  Skills = nEditor
})

let Education;
TextEditor(inputfields["education"]).then(nEditor=>{
  Education = nEditor
})


function toggle(){
    if(inputShow){
         inputfields.style.display = "none"
         inputShow = false 
         output.innerHTML=`

           <div class="hero">
            <h1>${inputfields["name"].value}</h1>
            <h3>${inputfields["title"].value}</h3>
           </div>

           <div class="main">
               <div class="Part1">
                 <h2>PROFESSIONAL SUMMARY</h2>
                 <p>${inputfields["prof_sum"].value}</p>

                <h2>WORK EXPERIENCE</h2>
                ${workHistorydetails.getData()}
               </div>

               <div class="Part2">
               <h2>CONTACT INFO</h2>
                 <p>${inputfields["contact"].value}</p>
                 <p>${inputfields["email"].value}</p>
                 <p>${inputfields["location"].value}</p>

                <h2>SKILLS</h2>
                 <p>${Skills.getData()}</p>

                <h2>EDUCATION</h2>
                 <p>${Education.getData()}</p>

                 <h2>AFFILIATIONS</h2>
                <p>${Affiliations.getData()}</p>

                </div>
           </div>

           <div class="btn">
              <button onclick="print()">Download Resume</button>
        </div>
         `

       }else{
        inputfields.style.display =  "block"
        inputShow = true
        output.innerHTML=""
  }
}
