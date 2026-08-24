
function SubjectComponent({Schedulecode,Subjectcode,Description,Type,Units,Status}){
 
 return(
<div>
<p><span>Schedule Code: {Schedulecode}</span></p>
<p><span>Subject Code: {Subjectcode}</span></p>
<p><span>Description: {Description}</span></p>
<p><span>Type: {Type}</span></p>
<p><span>Units: {Units}</span></p>
<p><span>Status: {Status}</span></p>



</div>
  )
}
export default SubjectComponent;