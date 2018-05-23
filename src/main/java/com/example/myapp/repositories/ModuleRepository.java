package com.example.myapp.repositories;

import com.example.myapp.models.Course;
import com.example.myapp.models.Module;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

public interface ModuleRepository extends CrudRepository<Module, Integer> {



}
