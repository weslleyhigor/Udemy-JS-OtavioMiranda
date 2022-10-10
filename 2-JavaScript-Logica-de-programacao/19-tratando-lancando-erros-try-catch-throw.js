function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('>> OPS! x e y precisam ser números!')
    }
    return x + y;
};

try{
    console.log(soma('20',15));
}catch(error){
    console.log('>> OPS! x e y precisam ser números!')
}
