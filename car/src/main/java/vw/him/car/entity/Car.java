package vw.him.car.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.Arrays;
import java.util.Date;
import java.util.Objects;

@Entity
public class Car {

    @Id
    @GeneratedValue
    private Long id;

    private String brand;

    private String color;

    private String name;

    private String type;

    private String description;

    private Long price;

    private int year;


    private String image;

    public Car(){
        super();
    }

    public Car(String brand, String color, String name, String type, String description, Long price, int year, String image) {
        this.brand = brand;
        this.color = color;
        this.name = name;
        this.type = type;
        this.description = description;
        this.price = price;
        this.year = year;
        this.image = image;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", brand='" + brand + '\'' +
                ", color='" + color + '\'' +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", year=" + year +
                ", image='" + image + '\'' +
                '}';
    }
}
