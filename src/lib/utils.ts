const getErrorMessage = (error:any):string=>{
      let message:string = '';
     
      if( error.code ===11000 && error.keyValue){
       const textInput = error.keyValue[Object.keys(error.keyValue)[0]];
        message = `${textInput} already exist`
      }else if(error instanceof Error){
          message = error.message
        }else if(error && typeof error ==='object' && 'message' in error){
          message = String(error.message)
        }else if(typeof error ==='string'){
            message = error
        }else{
            message = 'something went wrong please try later'
        }
        return message
    }

    