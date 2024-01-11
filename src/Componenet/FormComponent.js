import React,{useState} from 'react'
import form from "./formComponent.module.css";
const initialvalue={
  CurrentSaving:'',
  YearlySavings:'',
  ExpectedInterest:'',
  InvestmentDuration:'',
}
function FormComponent({fromchild}) {
    const [input, updateinput] = useState(initialvalue);
    
   const handleSubmit = (e) => {
    e.preventDefault(); 
    fromchild(input);
  };
  const handleReset=()=>{
    updateinput(initialvalue);
  }
  return (
    
    <div>
         <form className={form.form} onSubmit={handleSubmit} >
        <div className={form['input-group']}>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" value={input.CurrentSaving} id="yearly-contribution"  onChange={(e)=>updateinput({...input, CurrentSaving: e.target.value})} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" value={input.YearlySavings} id="yearly-contribution"  onChange={(e)=>updateinput({...input, YearlySavings: e.target.value})} />
          </p>
        </div>
        <div className={form['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" value={input.ExpectedInterest} id="expected-return"  onChange={(e)=>updateinput({...input, ExpectedInterest: e.target.value})} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" value={input.InvestmentDuration} id="duration"  onChange={(e)=>updateinput({...input, InvestmentDuration: e.target.value})}/>
          </p>
        </div>
        <p className={form.actions}>
          <button type="reset" className={form.buttonAlt} onClick={handleReset} >
            Reset
          </button>
          <button type="submit" className={form.button} >
            Calculate
          </button>
        </p>
      </form>
    </div>
  )
}

export default FormComponent;
