package vw.him.car.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vw.him.car.entity.Car;
import vw.him.car.repository.CarRepo;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {

    @Autowired
    private CarRepo carrepository;

    public List<Car> getAllCars(){
        return carrepository.findAll();

    }

    public Optional<Car> getCarById(Long id) {
        return carrepository.findById(id);
    }

    public Car createCar(Car c) {
        return carrepository.save(c);
    }

    public Optional<Car> updateCar(Long id, Car carDetails) {
        Optional<Car> optionalCar = carrepository.findById(id);
        if (optionalCar.isPresent()) {
            Car existingCar = optionalCar.get();
//            existingCar.setId(carDetails.getId());
            existingCar.setBrand(carDetails.getBrand());
            existingCar.setColor(carDetails.getColor());
            existingCar.setDescription(carDetails.getDescription());
            existingCar.setImage(carDetails.getImage());
            existingCar.setName(carDetails.getName());
            existingCar.setPrice(carDetails.getPrice());
            existingCar.setType(carDetails.getType());
            existingCar.setYear(carDetails.getYear());

            carrepository.save(existingCar);
            return Optional.of(existingCar);
        } else {
            return Optional.empty();
        }
    }
    public boolean deleteCar(Long id) {
        Optional<Car> c = carrepository.findById(id);
        if (c.isPresent()) {
            carrepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
