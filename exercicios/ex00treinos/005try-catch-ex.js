try{
    const idade = 17;
    if(idade < 18){
        throw new Error("Menor de idade");
    }
} catch (err){
    console.log(err.message);   
    }