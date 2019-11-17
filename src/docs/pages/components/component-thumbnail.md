---
title: Component - Thumbnail
menu_label: Thumbnail
layout: documentation
category: ["Components"]
markup_language: html
---

<div class="section-block">
  <div class="row pt-40 pt-md-40">
    <!-- Content Inner -->
    <div class="col w-9/12 w-md-full order-2 content-inner">
      <h1 class="font-light">Component: Thumbnail</h1>
      <p>Thumbnails, by default, do not require any JS, but Timber does offer a plugin for rollovers that handles rollover duration, background color and easing, giving you control over rollovers on the fly.</p>
      <div class="tabs rounded">
        <div class="tab-nav button-nav left">
          <a href="#tabs-1-pane-1" class="button border-b border-2 active bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Requirements</a>
          <a href="#tabs-1-pane-2" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">API</a>
          <a href="#tabs-1-pane-3" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Settings</a>
          <a href="#tabs-1-pane-4" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">CallBacks</a>
          <a href="#tabs-1-pane-5" class="button border-b border-2 bg-transparent bg-hover-transparent border-grey-lightest border-hover-grey-lightest color-grey-dark color-hover-grey-darkest border-active-primary color-active-primary">Classes &amp; Data Attributes</a>
        </div>
        <div class="tab-panes px-0 rounded rounded-sm-b border-transparent">
          <div id="tabs-1-pane-1" class="active animate-in">
            <div class="tab-content">
              <p class="mb-0">The rollover component requires <code class="color-indigo font-bold">_tm.rollover.js</code>. Rollovers are by default imported in <code class="color-indigo font-bold">_tm.core.js</code>, which means creating an instance of the core creates an instance of the rollover component. To exclude rollovers, open<code class="color-indigo font-bold">_tm.core.js</code> and comment <code class="color-indigo font-bold">import tmRollover from './components/_tm.rollover.js';</code>.</p>
            </div>
          </div>
          <div id="tabs-1-pane-2">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Method </th>
                      <th> Example </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">initialize()</th>
                      <td> Initializes the plugin. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">refresh()</th>
                      <td> Refreshes the plugin. Useful when new elements have been added to the page. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">destroy()</th>
                      <td> Destroys the instance of the plugin. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let rollover = new tmRollover('.thumbnail');
rollover.method();
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.rollover.method();
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-3">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Callback </th>
                      <th> Value </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">transitionElement:</th>
                      <td> '.rollover-content, img, .img' </td>
                      <td> Defines elements to be animated </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">overlay:</th>
                      <td> '.rollover-content' </td>
                      <td> Defines the rollover element </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">speed:</th>
                      <td> 400 </td>
                      <td> Milliseconds </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">easing:</th>
                      <td> 'easeInOutQuint' </td>
                      <td> Easing </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">gradientSpread:</th>
                      <td> '50%' </td>
                      <td> Defines gradient spread </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let lightbox = new tmLightbox('.lightbox',{
    speed: 400,
    easing: 'easeInOutQuint'
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.lightbox.settings.contentAnimation = 'slide';
timber.module.lightbox.settings.navThumbnails = false;
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-4">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Callback </th>
                      <th> Value </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">initialized: function(){}</th>
                      <td> Called once plugin has been initialized. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">elementVisible: function(){}</th>
                      <td> Called once the element is visible and animated. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">destroyed: function(){}</th>
                      <td> Called once plugin has been destroyed. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
              <!-- code -->
              <h6 class="uppercase">As a standalone plugin</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--let rollover = new tmRollover('.thumbnail',{
    callback:function(){}
});
--></code></pre>
              </div>
              <!-- code -->
              <!-- code -->
              <h6 class="uppercase">As a part of the core</h6>
              <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
                <pre class="m-0 language-js"><code class="inline-block scrolling-touch"><!--timber.module.rollover.settings.callback = function(){};
--></code></pre>
              </div>
              <!-- code -->
            </div>
          </div>
          <div id="tabs-1-pane-5">
            <div class="tab-content">
              <!-- Classes -->
              <div class="table-scrollable">
                <table class="table size-md mb-0 rounded bg-white">
                  <thead>
                    <tr>
                      <th> Classes &amp; Data Attributes </th>
                      <th> Description </th>
                    </tr>
                  </thead>
                  <tbody class="font-mono">
                    <tr>
                      <th class="color-indigo">.thumbnail</th>
                      <td> Class for which the tabs instance is created. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-hover-easing</th>
                      <td> Attribute added to div.thumbnail. Used to define rollover easing. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-hover-speed</th>
                      <td> Attribute added to div.thumbnail. Used to define the rollover animation speed. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-hover-bkg-color</th>
                      <td> Attribute added to div.thumbnail. Used to define the rollover background color. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-hover-bkg-opacity</th>
                      <td> Attribute added to div.thumbnail. Used to define the rollover opacity. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-gradient</th>
                      <td> Attribute added to div.thumbnail. Defines whether the rollover should have a solid background color or linear gradient. </td>
                    </tr>
                    <tr>
                      <th class="color-indigo">data-gradient-spread</th>
                      <td> Attribute added to div.thumbnail. Used to define the gradient spread. Expressed as a percentage, for example, 40%. </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Classes End -->
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Border Radius</h3>
        <p>Use Timber's border radius utility classes to change the border radius of thumbnails.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row items-center">
            <div class="col w-6/12">
              <div class="thumbnail rounded w-300 h-min-300 ml-auto mr-auto">
                <img src="https://images.unsplash.com/photo-1564419429381-98dbcf916478?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=944&amp;q=80" alt="">
              </div>
            </div>
            <div class="col w-6/12">
              <div class="thumbnail rounded-full w-300 h-min-300 ml-auto mr-auto">
                <img src="https://images.unsplash.com/photo-1453536693126-048a470d9b07?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="thumbnail rounded w-300 h-min-300 ml-auto mr-auto">
	<img src="https://images.unsplash.com/photo-1564419429381-98dbcf916478?ixlib=rb-1.2.1&auto=format&fit=crop&w=944&q=80" alt=""/>
</div>
<div class="thumbnail rounded-full w-300 h-min-300 ml-auto mr-auto">
	<img src="https://images.unsplash.com/photo-1453536693126-048a470d9b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt=""/>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Content Over</h3>
        <p>Use the <code class="color-indigo font-bold">.content-over</code> wrapper to add content over thumbnails and <code class="color-indigo font-bold">.media-overlay</code> to add colored overlays.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col grid grid-cols-2 grid-sm-cols-1">
              <div class="grid-item">
                <h5>With Title &amp; Caption</h5>
                <div class="thumbnail">
                  <img src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                  <div class="content-over items-end color-white">
                    <div>
                      <h3 class="mb-0 font-light">Title</h3>
                      <p class="mb-0">Some text</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-item">
                <h5>With Caption &amp; Overlay</h5>
                <div class="thumbnail">
                  <img src="https://images.unsplash.com/photo-1551841656-f4b93a0329e9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80" alt="">
                  <div class="content-over items-end color-white">
                    <div class="media-overlay bg-red opacity-30"></div>
                    <p class="mb-0">Some caption with media overlay</p>
                  </div>
                </div>
              </div>
              <div class="grid-item">
                <h5>Nested Images</h5>
                <div class="thumbnail">
                  <img src="https://images.unsplash.com/photo-1551970634-086c4065fa85?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                  <div class="media-overlay bg-gradient-purple-haze opacity-70"></div>
                  <div class="content-over items-end color-white">
                    <div>
                      <div class="flex items-center">
                        <div class="thumbnail w-80 rounded-full mr-10 mb-0">
                          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80" alt="Avatar">
                        </div>
                        <div>
                          <div class="name text-large">by <a href="#">John Adams</a></div>
                          <p class="author-title mb-0">WordPress Evangelist, JS Guru and Beer Lover</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-item">
                <h5>With Button &amp; Overlay</h5>
                <div class="thumbnail">
                  <img src="https://images.unsplash.com/photo-1555481815-7ddb523c7c55?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                  <div class="content-over items-end center">
                    <div class="media-overlay bg-black opacity-40"></div>
                    <div>
                      <a href="#" class="button size-md w-full rounded bg-teal bg-hover-teal color-white color-white">View Gallery</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="thumbnail">
	<img src="https://images.unsplash.com/photo-1551970634-086c4065fa85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt=""/>
	<div class="content-over items-end color-white">
		<div>
			<div class="flex items-center">
				<div class="thumbnail w-80 rounded-full mr-10 mb-0">
					<img src="../images/blog/bio-avatar.jpg" alt="Avatar">
				</div>
				<div>
					<div class="name text-large">by <a href="#">John Adams</a></div>
					<p class="author-title mb-0">WordPress Evangelist, JS Guru and Beer Lover</p>
				</div>
			</div>
		</div>
	</div>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Rollovers</h3>
        <p>If using the rollover plugin, you can customise the rollover on the fly using the followig data attributes on <code class="color-indigo font-bold">div.thumbnail</code>:</p>
        <ul>
          <li><strong>data-hover-easing:</strong> easing <em>(example easeInOutQuint)</em></li>
          <li><strong>data-hover-speed:</strong> milliseconds <em>(example 700)</em></li>
          <li><strong>data-hover-bkg-color:</strong> hex <em>(example #000000)</em></li>
          <li><strong>data-hover-bkg-opacity:</strong> decimal <em>(example 0.3)</em></li>
        </ul>
        <p>Then add one of the animation classes shown below to <code class="color-indigo font-bold">div.thumbnail</code>. If you want to create your own animation classes and use the rollover plugin to handle your class, simply define your class in your own stylesheet.</p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full grid grid-cols-2 grid-md-cols-2 grid-xs-cols-1">
              <div class="grid-item grid-sizer">
                <div class="thumbnail thumbnail-1 rounded overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1515020395716-70a1b16212c3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-fade-out </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-fade-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-fade-in </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1565506602745-8b149f0be2c2?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .img-scale-in </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1552131990-74b9977ee9c3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .img-scale-out </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-fade-img-scale-out" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-fade-img-scale-out </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-slide-in-top" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1556741533-f9cffe3ba641?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-slide-in-top </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-slide-in-left" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1562101806-f2effc30ed54?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-slide-in-left </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-slide-in-right" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1551970634-086c4065fa85?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-slide-in-right </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-slide-in-bottom" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1531694289743-6ce6b21921b0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-slide-in-bottom </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-img-slide-up color-white" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="1">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-img-slide-up </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-img-slide-left color-white" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="1">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1551903700-d010a6b9f8e4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-img-slide-left </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-img-slide-right color-white" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="1">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1562184167-b3c8a9d019dd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-img-slide-right </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-img-slide-down color-white" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="1">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1551841416-2715356ac234?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-img-slide-down </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1551841656-f4b93a0329e9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-scale-in </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-scale-in img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1565080106373-e914c06287a8?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80" alt="">
                    <span class="rollover-content items-center center">
                      <span> .overlay-scale-in.img-scale-in </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail rounded overlay-img-passpartout overlay-fade-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.1">
                  <a class="overlay-link" href="#">
                    <span class="image-mask">
                      <img src="https://images.unsplash.com/photo-1573509092053-df66da7e8573?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="">
                    </span>
                    <span class="rollover-content items-center center">
                      <span> .overlay-scale-in.img-scale-in </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="thumbnail thumbnail-1 rounded overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.9">
	<a class="overlay-link" href="#">
		<img src="https://images.unsplash.com/photo-1515020395716-70a1b16212c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""/>
		<span class="rollover-content items-center center">
			<span>
				.overlay-fade-out
			</span>
		</span>
	</a>
</div>
--></code></pre>
      </div>
      <!-- code -->
      <!-- Demo Block -->
      <div class="demo-block mt-80">
        <h3 class="font-light">Gradient</h3>
        <p>Change the rollover background from solid to gradient by using the data attribute <code class="color-indigo font-bold">data-gradient</code>. Set the gradient spread by using the data attribute <code class="color-indigo font-bold">data-gradient-spread</code> and define it as a percentage. </p>
        <div class="p-30 rounded bg-grey-ultralight">
          <div class="row pt-0">
            <div class="col w-full grid grid-cols-2 grid-md-cols-2 grid-xs-cols-1">
              <div class="grid-item grid-sizer">
                <div class="thumbnail thumbnail-1 rounded overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.95" data-gradient="" data-gradient-spread="70%">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1515020395716-70a1b16212c3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80" alt="">
                    <span class="rollover-content items-center center text-normal font-bold">
                      <span> Gradient </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="grid-item">
                <div class="thumbnail thumbnail-1 rounded overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#f44f7f" data-hover-bkg-opacity="0.95" data-gradient="" data-gradient-spread="80%">
                  <a class="overlay-link" href="#">
                    <img src="https://images.unsplash.com/photo-1569785702022-ac5c2d5bdab2?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2251&amp;q=80" alt="">
                    <span class="rollover-content items-center center text-normal font-bold">
                      <span> Gradient </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Demo Block End -->
      <!-- code -->
      <h6 class="uppercase">Html</h6>
      <div class="rounded p-20 overflow-y-scroll mb-0 bg-gradient-grey-ultralight border-l border-4 border-solid border-indigo">
        <pre class="m-0 language-html"><code class="inline-block scrolling-touch"><!--<div class="thumbnail thumbnail-1 rounded overlay-fade-out" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#f44f7f" data-hover-bkg-opacity="0.95" data-gradient data-gradient-spread="80%">
	<a class="overlay-link" href="#">
		<img src="https://images.unsplash.com/photo-1569785702022-ac5c2d5bdab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80" alt=""/>
		<span class="rollover-content items-center center">
			<span>
				Gradient
			</span>
		</span>
	</a>
</div>
--></code></pre>
      </div>
      <!-- code -->
    </div>
    <!-- Content Inner End -->
  </div>
</div>