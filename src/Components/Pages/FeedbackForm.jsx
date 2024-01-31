import React from 'react'
export default function FeedbackForm() {
    const handleFileClick = () =>
    {
        window.showDirectoryPicker();
    }
  return (
    <>
        <section className='feedbackFormSection'>
            <div className="secOneForm">
                <label>Subject</label>
                <label>Email address</label>
                <label>Attachment</label>
                <label>Message</label>
            </div>
            <div className="secTwoField">
                <form action="">
                    <select name="" id="dropBox">
                        <option value="Customer service">Customer service</option>
                        <option value="Webmaster">Webmaster</option>
                    </select>
                    <input type="email" name="email" id="email" placeholder='your@email.com' required />
                    <span id='fileSection'>
                        <input type="text" className='fileTextBox' readOnly style={{cursor:'not-allowed'}}/>
                        <input type="button" className='fileObjectBox' name="" id="" value='CHOOSE FILE' onClick={handleFileClick} />
                        <label>optional</label>
                    </span>
                    <textarea type="textarea" name="" id="messageArea" placeholder='How can we help?' />
                    <input type="submit" name="" id="submit" value="Send" />
                </form>
            </div>
        </section>
    </>
  )
}