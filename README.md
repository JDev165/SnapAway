# SnapAway Introduction:

Chrome extension to automatically skip YouTube ads.

# Motivation

Hate having to click on the skip button.

# API Reference

Uses MutationObserver Web API to detect changes to the DOM. The content script waits for the DOM to fully load and when a mutation/change is detected by the MutationObserver API, we check for the ads skip button. If the skip button is found in the DOM, we trigger a click on the skip button.
