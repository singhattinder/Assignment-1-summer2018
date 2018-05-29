package com.example.myapp.repositories;

import com.example.myapp.models.Widget;
import org.springframework.data.repository.CrudRepository;

public interface WidgetRepository extends CrudRepository<Widget, Integer> {


}
