package com.example.myapp.services;


import com.example.myapp.models.Widget;
import com.example.myapp.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WidgetService {


    @Autowired
    WidgetRepository widgetRepository;

    public List<Widget> findAllWidgets(){

        return (List<Widget>) widgetRepository.findAll();

    }
}
