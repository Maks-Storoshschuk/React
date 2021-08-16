export default function Form(){
    const onsubmitForm = ()=>{
        console.log('[eq')
    }
    return(
        <div>
            <form>
                <div onSubmit={onsubmitForm}>
                    <input type="text" name={'model'}/>
                    <input type="text" name={'price'}/>
                    <input type="number" name={'year'}/>
                </div>
                <div>
                    <button>SAVE</button>
                </div>

            </form>

        </div>
    )
}