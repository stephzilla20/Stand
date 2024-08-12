package com.stephent.Stand_Up.controller;


import com.stephent.Stand_Up.model.Video;
import com.stephent.Stand_Up.repo.VideoRepo;
import com.stephent.Stand_Up.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class VideoController {
    @Autowired
    VideoService videoService;
    VideoRepo videoRepo;

    @GetMapping(path = "/videoList")
    public List<Video> viewVideoList(){
       return videoService.getAllVideos();
    }

    @PostMapping (path = "/addVideo")
    public Video addVideo(@RequestBody Video vid){
        return videoService.addVideo(vid);
    }

    @DeleteMapping (path = "/deleteVideo")
    public boolean deleteVideo(@RequestParam(value = "id")Long id){
        return videoService.removeVideo(id);

    }

    @DeleteMapping (path = "/deleteAll")
    public boolean deleteAll(){
        return videoService.removeAll();
    }

}
