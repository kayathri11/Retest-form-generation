import React, { useState, useEffect } from 'react';  
  
const Dashboard = () => {  
  const [regno, setRegno] = useState('');  
  const [name, setName] = useState('');  
  const [cieChoice, setCieChoice] = useState('');  
  const [courseChoices, setCourseChoices] = useState({  
   course1: '',  
   course2: '',  
   course3: '',  
   course4: '',  
   course5: '',  
   course6: '',  
  });  

  const [reasonForAbsence, setReasonForAbsence] = useState('');  
  const [otherReason, setOtherReason] = useState('');  
    
  const handleOtherReason = (e) => {  
    setOtherReason(e.target.value);  
  };

  
  useEffect(() => {  
   const userData = JSON.parse(localStorage.getItem('loggedInUser'));  
   setRegno(userData.regno);  
   setName(userData.name);  
  }, []);  
  
  const handleCieChoice = (e) => {  
   setCieChoice(e.target.value);  
  };  
  
  const handleCourseChoice = (e, course) => {  
   const currentValue = courseChoices[course];  
   if (currentValue === e.target.value) {  
    setCourseChoices((prevChoices) => ({ ...prevChoices, [course]: '' }));  
   } else {  
    setCourseChoices((prevChoices) => ({ ...prevChoices, [course]: e.target.value }));  
   }  
  };  
  
  const handleSubmit = (e) => {  
   e.preventDefault();  
   if (courseChoices.course1 === 'improvement-test' || courseChoices.course2 === 'improvement-test' || courseChoices.course3 === 'improvement-test' || courseChoices.course4 === 'improvement-test' || courseChoices.course5 === 'improvement-test' || courseChoices.course6 === 'improvement-test') {  
    window.location.href = 'https://www.instamojo.com/@COE/l2aa40f13a83642f59a6663a526ec10e4/';  
   }  
  };  
  
  return (  
   <div className="dashboard-container">  
    <h2>Re - Test / Improvement Test Form for CIE</h2>  
    <form onSubmit={handleSubmit}>  
      <label>Register Number:</label>  
      <span id="dashboard-regno">{regno}</span>  
      <br />  
      <label>Name:</label>  
      <span id="dashboard-name">{name}</span>  
      <br />  
      <label>Choice of CIE:</label>  
      <input type="checkbox" id="cie-1" name="cie" value="1" checked={cieChoice === '1'} onChange={handleCieChoice} />  
      <label for="cie-1">1</label>  
      <input type="checkbox" id="cie-2" name="cie" value="2" checked={cieChoice === '2'} onChange={handleCieChoice} />  
      <label for="cie-2">2</label>  
      <input type="checkbox" id="cie-3" name="cie" value="3" checked={cieChoice === '3'} onChange={handleCieChoice} />  
      <label for="cie-3">3</label>  
      <br />  
      <label>Reason for absence in regular CIE test:</label>  
      <select id="reason-for-absence" value={reasonForAbsence} onChange={(e) => setReasonForAbsence(e.target.value)}>  
      <option value="">Select a reason</option>  
      <option value="Medical Grounds">Medical Grounds</option>  
      <option value="On-Duty(participation in Academic/ Sports/ NCC/ NSS)">On-Duty(participation in Academic/ Sports/ NCC/ NSS)</option>  
      <option value="Major Family Function/Condolence">Major Family Function/Condolence</option>  
      <option value="Others">Others</option>  
      </select>
  
      {reasonForAbsence === 'Others' && (  
        <div>  
        <label>Other reason:</label>  
        <input type="text" id="other-reason" value={otherReason} onChange={handleOtherReason} />  
        </div>  
      )}

      <br />  
      <label>Courses List:</label>  
      <table>  
       <tr>  
        <th>Course Code</th>  
        <th>Course Name</th>  
        <th>Re-test</th>  
        <th>Improvement Test</th>  
       </tr>  
       <tr>  
        <td>U19EC701</td>  
        <td>Wireless Communication</td>  
        <td>  
          <input type="checkbox" id="re-test-1" name="course-1" value="re-test" checked={courseChoices.course1 === 're-test'} onChange={(e) => handleCourseChoice(e, 'course1')} />  
          <label for="re-test-1">Re-test</label>  
        </td>  
        <td>  
          <input type="checkbox" id="improvement-test-1" name="course-1" value="improvement-test" checked={courseChoices.course1 === 'improvement-test'} onChange={(e) => handleCourseChoice(e, 'course1')} />  
          <label for="improvement-test-1">Improvement Test</label>  
        </td>  
       </tr>  
       <tr>  
        <td>U19EC702</td>  
        <td>Microwave and Optical Communication</td>  
        <td>  
          <input type="checkbox" id="re-test-2" name="course-2" value="re-test" checked={courseChoices.course2 === 're-test'} onChange={(e) => handleCourseChoice(e, 'course2')} />  
          <label for="re-test-2">Re-test</label>  
        </td>  
        <td>  
          <input type="checkbox" id="improvement-test-2" name="course-2" value="improvement-test" checked={courseChoices.course2 === 'improvement-test'} onChange={(e) => handleCourseChoice(e, 'course2')} />  
          <label for="improvement-test-2">Improvement Test</label>  
        </td>  
       </tr>  
       <tr>  
        <td>U19GE701</td>  
        <td>Professional Ethics And Human Values</td>  
        <td>  
          <input type="checkbox" id="re-test-3" name="course-3" value="re-test" checked={courseChoices.course3 === 're-test'} onChange={(e) => handleCourseChoice(e, 'course3')} />  
          <label for="re-test-3">Re-test</label>  
        </td>  
        <td>  
          <input type="checkbox" id="improvement-test-3" name="course-3" value="improvement-test" checked={courseChoices.course3 === 'improvement-test'} onChange={(e) => handleCourseChoice(e, 'course3')} />  
          <label for="improvement-test-3">Improvement Test</label>  
        </td>  
       </tr>  
       <tr>  
        <td>U19EC914</td>  
        <td>Wireless Network</td>  
        <td>  
          <input type="checkbox" id="re-test-4" name="course-4" value="re-test" checked={courseChoices.course4 === 're-test'} onChange={(e) => handleCourseChoice(e, 'course4')} />  
          <label for="re-test-4">Re-test</label>  
        </td>  
        <td>  
          <input type="checkbox" id="improvement-test-4" name="course-4" value="improvement-test" checked={courseChoices.course4 === 'improvement-test'} onChange={(e) => handleCourseChoice(e, 'course4')} />  
          <label for="improvement-test-4">Improvement Test</label>  
        </td>  
       </tr>  
       <tr>  
        <td>U19EC918</td>  
        <td>Bio - Medical Instrumentation</td>  
        <td>  
          <input type="checkbox" id="re-test-5" name="course-5" value="re-test" checked={courseChoices.course5 === 're-test'} onChange={(e) => handleCourseChoice(e, 'course5')} />  
          <label for="re-test-5">Re-test</label>  
        </td>  
        <td>  
          <input type="checkbox" id="improvement-test-5" name="course-5" value="improvement-test" checked={courseChoices.course5 === 'improvement-test'} onChange={(e) => handleCourseChoice(e, 'course5')} />  
          <label for="improvement-test-5">Improvement Test</label>  
        </td>  
       </tr>  
       <tr>  
        <td>U19EC2006</td>  
        <td>5G and Its Applications</td>  
        <td>  
          <input type="checkbox" id="re-test-6" name="course-6" value="re-test" checked={courseChoices.course6 === 're-test'} onChange={(e) => handleCourseChoice(e, 'course6')} />  
          <label for="re-test-6">Re-test</label>  
        </td>  
        <td>  
          <input type="checkbox" id="improvement-test-6" name="course-6" value="improvement-test" checked={courseChoices.course6 === 'improvement-test'} onChange={(e) => handleCourseChoice(e, 'course6')} />  
          <label for="improvement-test-6">Improvement Test</label>  
        </td>  
       </tr>  
      </table>  
      <br />  
      <input type="submit" value="Submit" />  
    </form>  
   </div>  
  );  
};  
  
export default Dashboard;
