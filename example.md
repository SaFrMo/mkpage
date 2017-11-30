# Notes

## Front Page
* Slides are children of the front page - paste video links in "Enter the video URL for this page" metafield.

## Single Posts
* "Custom Structure" on Permalink page must be: `/news/%postname%/`

## Work Detail
* On work-detail pages, credits below the video are set up like this:
     ```
     <span class="credit">
       <span>Director</span>
       <span>Traktor</span>
     </span>

     <span class="credit">
       <span>Production Company</span>
       <span>Rattling Stick</span>
     </span>
     ```

## About
* Sample "What We Do" section:
    ```
    We develop music strategies for global brands, provide music search and licensing services, create innovative activations, and throw a mean party.

    <div class="split">
        <div>
            <div class="label">What We Do</div>
            <ul>
                <li>Sound Design</li>
                <li>Recording</li>
                <li>Editing</li>
                <li>Mixing</li>
                <li>Video Playback</li>
                <li>Music Composition</li>
            </ul>
        </div>
        <img src="http://machine.local/wp-content/uploads/2017/11/3UVJyU.png" alt="" width="756" height="505" class="alignnone size-full wp-image-59" />
    </div>
    ```
* About Structure:
    * Our Team
        * team member
        * etc...
    * Studios
        * US
        * UK

# Structure
* Front Page (front-page)
    * Slide
    * ...
* Work Grid (work-grid)
    * Work Detail
    * ...
* About (about)
    * Team
        * Another Page
    * Studios
        * Child of Studios
        * Another Child of Studios
            * Child of second Studios child
* News (news)
    * Single
    * ...
* Contact
