import '/scss/blog.scss';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useBlogSlider } from './components/slider.js';
import { initBlogFilterWithSwiper } from './components/filter.js';
import { useArticlesSlider } from './components/slider.js';

useTheme();
useBurger();
useBlogSlider();
initBlogFilterWithSwiper();
useArticlesSlider();
