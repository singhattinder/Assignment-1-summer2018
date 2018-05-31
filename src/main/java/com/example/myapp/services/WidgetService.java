package com.example.myapp.services;


import com.example.myapp.models.Widget;
import com.example.myapp.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WidgetService {


    @Autowired
    WidgetRepository widgetRepository;

    @GetMapping("/api/widget")
    public List<Widget> findAllWidgets(){

        return (List<Widget>) widgetRepository.findAll();

    }

    @PostMapping("/api/widget/save")
    public void saveAllWidgets(@RequestBody List<Widget> widgets){

        widgetRepository.deleteAll();

        for (Widget widget: widgets
             ) {
            widgetRepository.save(widget);
            
        }
    }
}
