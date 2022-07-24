class ShoesServices{
  constructor(){
    this.shoes = [];
    this.generateData();
  }

  generateData(){
    this.shoes = [
      {id: 1, brand: 'Noke', price: 299, size: 29},
      {id: 2, brand: 'edidas', price: 1599, size: 27},
      {id: 3, brand: 'floxi', price: 430, size: 25.5},
      {id: 4, brand: 'pima', price: 1400, size: 22},
      {id: 5, brand: 'gassi', price: 289, size: 28},
    ];
  }

  create(newShoe){
    // Paso 6.1.4: Se simula una promesa (new promise) y una operación asincrona (setTimeOut = Base de Datos)
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        // Paso 6.1.5: Lógica de negocio
        this.shoes.push(newShoe);
        // Paso 6.1.6: En caso de éxito, usar resolve()
        resolve();
      }, 1000);
    });
  }

  findAll(price){
    // Paso 6.1.4: Se simula una promesa (new promise) y una operación asincrona (setTimeOut = Base de Datos)
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        // Paso 6.1.5: Lógica de negocio
        if(price){
          const filterData = this.shoes.filter(shoe => shoe.price >= price);
          // Paso 6.1.6: En caso de éxito, usar resolve()
          resolve(filterData);
        }
        resolve(this.shoes);
      }, 1000);
    })
  }

  findOne(id){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        const shoe = this.shoes.find(shoe => shoe.id === parseInt(id));
        if(shoe){
          resolve(shoe);
        }
      }, 1000);
    });
  }

  editPartial(id, body){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        const indexFounded = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
        if(indexFounded !== -1){
          let shoesCopy = [...this.shoes];
          const newBody = this.shoes[indexFounded];
          shoesCopy[indexFounded] = { ...newBody, ...body }
          this.shoes = [ ...shoesCopy ];
          resolve();
        }
      }, 1000);
    });
  }

  editComplete(id, body){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        const indexFounded = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
        if(indexFounded !== -1){
          let shoesCopy = [...this.shoes];
          shoesCopy[indexFounded] = { id, ...body }
          this.shoes = [ ...shoesCopy ];
          resolve();
        }
      }, 1000);
    });
  }

  delete(id){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        const indexFounded = this.shoes.findIndex(shoe => shoe.id === parseInt(id));
        if(indexFounded !== -1){
          const shoesCopy = [...this.shoes];
          shoesCopy.splice(indexFounded, 1);
          this.shoes = [...shoesCopy];
          resolve();
        }
      }, 1000);
    });
  }

};

module.exports = ShoesServices;