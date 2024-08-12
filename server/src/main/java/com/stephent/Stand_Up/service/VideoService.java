package com.stephent.Stand_Up.service;

import com.stephent.Stand_Up.model.Video;
import com.stephent.Stand_Up.repo.VideoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class VideoService {

    @Autowired
    VideoRepo videoRepo;

    public List<Video> getVideoByTitle(String title){
        return videoRepo.findByTitle(title);
    }

    public List<Video> getAllVideos(){
        //create array list to hold videos
        List<Video> videoList = new ArrayList<>();

        //loop to access all videos and add to the list
        videoRepo.findAll().forEach(video -> videoList.add(video));
        return videoList;
    }

    public boolean removeVideo(Long id){
        videoRepo.deleteById(id);

        Optional<Video> deletedVid = videoRepo.findById(id);
        if(deletedVid.isPresent()){
            return false;
        }
        else{
            return true;
        }
    }

    public boolean removeAll(){
        videoRepo.deleteAll();
        if(videoRepo.count() == 0){
            return true;
        }
        else{
            return false;
        }
    }

    public Video addVideo(Video video) {
        return videoRepo.save(video);
    }

}
