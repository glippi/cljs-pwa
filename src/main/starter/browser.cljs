(ns starter.browser
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [starter.bmi :refer [bmi-component]]))

(defonce install-prompt (r/atom nil))

(defn install-prompt-component []
  (let [prompt-event @install-prompt]
    (when prompt-event
      [:button {:style {:margin-top "30px"
                        :padding "10px"
                        :border-radius "5px"}
                :on-click #(do (.prompt prompt-event)
                               (reset! install-prompt nil))}
       "Install the BMI calculator!"])))

(defn app []
  [:<>
   [bmi-component]
   [install-prompt-component]])

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (js/console.log "start")
  (.addEventListener
   js/window
   "beforeinstallprompt"
   (fn [e]
     (.preventDefault e)         ;; Prevent the mini-infobar from appearing on mobile
     (reset! install-prompt e)))

  (rdom/render [app]
               (.getElementById js/document "app")))

(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log "init")
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))
